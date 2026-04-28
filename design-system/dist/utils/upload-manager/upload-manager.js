import { queue as U } from "./queue.js";
import { MAX_RETRY_LIMIT as v, MAX_CHUNK_SIZE as O, MAX_FILES_PER_SIZE as q } from "./upload-manager.constants.js";
import { getChunksToUpload as X, getBatchesGroups as Z } from "./upload-manager.utils.js";
const Y = ({
  retryLimit: C = v,
  maxChunkSizeLimit: y = O,
  maxFilesPerBatch: A = q,
  worker: T,
  onUpload: B,
  onProgress: F,
  onReject: g,
  onComplete: D
}) => {
  let p = !1, c = [], d = [], s;
  const m = [], I = U(T), _ = (e, t, i) => new Promise((o, l) => {
    I({
      data: e,
      callback: (a, r) => {
        a && l(a), o(r);
      },
      onProgress: i,
      signal: t
    });
  }), w = () => {
    const e = c.shift();
    m.push(e);
  }, P = (e) => {
    const t = e.map((o) => ({
      id: o.name,
      name: o.name,
      blob: o,
      index: 0,
      parts: 1,
      length: o.size
    })), i = X(t, y);
    c = Z(i, y, A), w();
  }, k = async (e) => {
    let t = e.map((n) => ({
      retry: 0,
      data: n,
      abortController: new AbortController()
    }));
    const i = [], o = [];
    let l = !1, a = !0, r;
    for (; t.length > 0 && p; )
      if (s = t.shift(), !!s)
        try {
          const n = await _(
            s.data,
            s.abortController.signal,
            (u) => {
              F(s.data, u);
            }
          );
          l = s.abortController.signal.aborted, a = s.abortController.signal.reason;
          const f = n.uploadedFiles.map((u) => s.data.find((h) => h.id === u.name)).filter(Boolean).map((u) => ({
            ...u,
            id: n.uploadedFiles.find((h) => h.name === u.id).id
          })), b = n.failedFiles.map((u) => s.data.find((h) => h.id === u.name)).filter(Boolean).map((u) => ({
            ...u,
            ...n.failedFiles.find((h) => h.name === u.id)
          }));
          l || (f.length > 0 && o.push(f), b.length > 0 && i.push(b));
        } catch (n) {
          r = n, a = s.abortController.signal.reason, l = r instanceof DOMException, (l || !a || s.retry >= C) && (i.push(s.data.map((f) => ({ ...f, errorMessage: n.message }))), t.forEach((f) => {
            i.push(f.data.map((b) => ({ ...b, errorMessage: n.message })));
          }), t = []), s.retry < C && (s.retry += 1, t.unshift(s));
        }
    return { fails: i, success: o, shouldContinue: !l || a, error: r };
  }, M = async () => {
    for (; m.length > 0 && p; ) {
      const e = m.shift();
      if (e) {
        B(e[0]);
        try {
          const { fails: t, shouldContinue: i, success: o, error: l } = await k(e);
          l ? t.length > 0 ? (d.push(t), g(t[0], l)) : (d.push(e), g(
            e[0].map((a) => ({ ...a, errorMessage: String(l) })),
            l
          )) : (t.length > 0 && (d.push(t), g(t[0], new DOMException("Failed", "Some files failed to upload"))), o.length > 0 && D(o[0])), i && w();
        } catch (t) {
          console.log(t);
        }
      }
    }
  }, x = async (e) => {
    P(e), p = !0, await M(), p = !1;
  }, Q = (e) => new Promise((t) => {
    if ((s == null ? void 0 : s.data.map(({ id: o }) => o).includes(e)) && s)
      s.abortController.signal.onabort = () => {
        const o = ((s == null ? void 0 : s.data) ?? []).filter((l) => l.id !== e);
        o.length > 0 && c.unshift([o]), t();
      }, s.abortController.abort(!0);
    else {
      const o = c.map(
        (r) => r.map((n) => n.filter((f) => f.id !== e)).filter((n) => n.length)
      ).filter((r) => r.length), l = c.map(
        (r) => r.map((n) => n.filter((f) => f.id === e)).filter((n) => n.length)
      ).filter((r) => r.length).flat();
      c = o, d.push(l);
      const a = new DOMException("Aborted", "removed from queue");
      g(
        l[0].map((r) => ({ ...r, errorMessage: a.message })),
        a
      ), t();
    }
  }), S = () => (p = !1, new Promise((e) => {
    s ? (s.abortController.signal.onabort = () => {
      c.forEach((t) => {
        d.push(t);
        const i = new DOMException("Aborted", "Service aborted");
        g(
          t[0].map((o) => ({ ...o, errorMessage: i.message })),
          i
        );
      }), c = [], e();
    }, s.abortController.abort(!0)) : e();
  })), E = async () => {
    const e = c.shift();
    e && m.push(e), p = !0, await M(), p = !1;
  };
  return {
    retry: async (e) => {
      const t = d.find(
        (a) => a.some((r) => r.some((n) => n.id === e))
      );
      if (!(t != null && t.length))
        return;
      const i = t.map((a) => a.filter((r) => r.id !== e)).filter((a) => a.length), o = d.filter(
        (a) => a.some((r) => r.every((n) => n.id !== e))
      );
      d = i.length ? [...o, i] : o;
      const l = t.map(
        (a) => a.filter((r) => r.id === e)
      );
      if (p) {
        c.push(l);
        return;
      } else
        return c = [l], E();
    },
    retryAll: async () => (c = [...d], d = [], E()),
    upload: x,
    cancelAll: S,
    cancel: Q
  };
};
export {
  Y as UploadManager
};
//# sourceMappingURL=upload-manager.js.map
