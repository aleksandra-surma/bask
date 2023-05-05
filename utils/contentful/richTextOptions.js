import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-md my-4 leading-10">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="mb-4 text-center text-4xl font-bold leading-6 text-gray-900">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="mb-4 mt-10 text-center text-3xl">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="mt-10 mb-4 text-center text-2xl">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="mb-4 text-center text-xl">{children}</h4>;
    },
    [BLOCKS.OL_LIST]: ({ content }) => {
      const listItems = content.map((item, index) => {
        return <li key={uuid()} className="my-2">{`${index + 1}. ${item.content[0].content[0].value}`}</li>;
      });

      return <ol className="ml-4">{listItems}</ol>;
    },
    [BLOCKS.UL_LIST]: ({ content }) => {
      const listItems = content.map((item, index) => {
        const alpha = 'abcdefghijklmnopqrstuvwxyz';
        return <li key={uuid()}>{`${alpha[index]}. ${item.content[0].content[0].value}`}</li>;
      });

      return <ol className="">{listItems}</ol>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li>{children}</li>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const [text] = children;
      const {
        data: { uri },
      } = node;
      return (
        <Link href={uri} target="_blank" rel="noopener">
          {text}
        </Link>
      );
    },
  },
};

export default richTextOptions;
