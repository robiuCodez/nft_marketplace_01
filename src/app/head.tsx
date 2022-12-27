interface IHead {
  title?: string;
}

const Head = ({ title = "NFT Marketplace" }: IHead) => {
  return (
    <head>
      <title>{title}</title>
    </head>
  );
};

export default Head;
