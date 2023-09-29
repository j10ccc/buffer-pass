export type Language = "en";

const tokens: {
  [key in Language]: { [key: string]: string }
} = {
  "en": {
    "ui.title": "BufferPass created a strong password for this website.",
    "ui.description": "This password will be saved to your BufferPass host and will AutoFill on all supported devices. Look up your saved passwords in the BufferPass dashboard."
  },
};

export default tokens;