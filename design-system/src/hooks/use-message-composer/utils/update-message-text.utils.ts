import { USER_MENTION_REGEX } from '@constants/regex.constants';

/** Add parenthesis in the mention to identify where divide it. */
const getMentionsFormatted = (mentions: string): string[] =>
  mentions.split('|').map((mention) => {
    // Get the name in the mention.
    const mentionName = mention.slice(mention.indexOf('>@') + 2, mention.indexOf('</span>'));

    return (
      mention
        // Add a `(`at the begin of the mention
        .replace(/<span/g, '(<span')
        // Add a `)` at the end of the mention
        .replace(/<\/span>/g, '</span>)')
        // Add a `(` before at the last letter of the mention
        .replace(/\w<\/span>/g, `(${mentionName[mentionName.length - 1]}</span>`)
        // Add a `)` after at the @
        .replace(/>@/g, '>@)')
    );
  });

/**
 * Update each mention in the message to group the span tag in parentheses
 *
 * The mention must be updated as:
 * (<span contenteditable="false" class="css-cGoNyh" data-user-id="2">\@)JohnDo(e</span>)
 *
 * Then split the message into each character and the group in parentheses takes it as one character
 * to return the message updated as follows:
 *
 * ["(<span contenteditable="false" class="css-cGoNyh" data-user-id="2">\@)", "J", "o", "h", "n", "D", "o", "(e</span>)"]
 */
export const updateMessageText = (message: string): string[] => {
  // Unescape the html quotes and remove the empty <span> tag.
  const cleanedMessage = message
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/<span><\/span>/g, '');

  // Get mentions and join them with a pipe to separate them by regex easily later.
  const mentions = (cleanedMessage.match(USER_MENTION_REGEX) || []).join('|');

  if (mentions.length > 0) {
    const mentionsFormatted = getMentionsFormatted(mentions);

    return (
      cleanedMessage
        .replace(new RegExp(mentions, 'g'), (mention) => {
          // Get the same mention received but formatted
          const mentionFormatted = mentionsFormatted.find((mentionUpdated) =>
            mentionUpdated.includes(
              mention.slice(mention.indexOf('>@') + 3, mention.indexOf('</span>') - 1),
            ),
          );

          // Change the original mention for the formatted mention
          return mentionFormatted;
        })
        // Split the string into each character.
        .split(/(?![^(]*\))/g)
    );
  } else {
    return cleanedMessage.split('');
  }
};
