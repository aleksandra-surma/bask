import contentfulClient from 'services/contentful/contentfulClient';

export const getContent = async (contentfulPhrase) => {
  const res = await contentfulClient.getEntries({ content_type: contentfulPhrase });

  return res.items;
};

export const getEntry = async (entryId) => {
  const res = await contentfulClient.getEntry(entryId);

  return res;
};
