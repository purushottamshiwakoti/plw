export const removeImage = (description: string) => {
  const imgTag = description.match(/<img[^>]+>/); // Extract img tag
  // Remove img tag from description
  if (imgTag) {
    const restOfDescription = description.replace(imgTag[0], ""); // Access matched string from RegExpMatchArray
    return restOfDescription;
  }
  return description; // Return original description if no img tag found
};
