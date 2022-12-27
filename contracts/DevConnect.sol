// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

// NFT Smart Contract
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// Access Contract
import "@openzeppelin/contracts/access/Ownable.sol";

contract DevConnect is ERC721Enumerable, Ownable {
    // convert integers to String
    using Strings for uint256;

    string baseURI;
    // all images are in webp format.
    string public baseImage = ".webp";

    // to help OpenSea get information(s) about the nft.
    string public baseExtension = ".json";

    // cost of minting 1 NFT
    uint256 public mintingCost = 0.001 ether;

    // maxSupply of NFTs
    uint256 public maxSupply = 99;

    bool public paused = false;

    uint256 supply;

    // after successfully minting an NFT
    event NftMinted(
        uint256 indexed _nftId,
        address indexed _owner,
        uint256 _mintingCost,
        string indexed _nftURI,
        uint256 _mintedAt
    );

    struct Sale {
        uint256 nftId;
        address owner;
        uint256 mintingCost;
        string imageURI;
        uint256 mintedAt;
    }

    Sale[] mintedNfts;

    // _initialBaseURI -- IPFS Metadata Location
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initialBaseURI
    ) ERC721(_name, _symbol) {
        // set baseURI
        setBaseURI(_initialBaseURI);
    }

    // set base URI
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    modifier isPaused() {
        require(!paused, "NFTs under maintenance");
        _;
    }

    modifier isSupplyAvailable() {
        // get total supply of NFT's on the platform
        supply = totalSupply();
        require(supply <= maxSupply, "Total Supply Exhausted");
        _;
    }

    modifier isEtherLow() {
        require(msg.value > 0 ether, "Ether too Low to mint");
        _;
    }

    // mint nft
    function mintNft() public payable isPaused isSupplyAvailable {
        if (msg.sender != owner()) {
            require(msg.value >= mintingCost, "Please, top-up ethers");
        }

        // _safeMint (msg.sender + nftId)
        _safeMint(msg.sender, supply + 1);

        // nftId = supply + 1
        mintedNfts.push(
            Sale(
                supply + 1,
                msg.sender,
                msg.value,
                createImageURI(supply + 1),
                block.timestamp
            )
        );

        emit NftMinted(
            supply + 1,
            msg.sender,
            msg.value,
            createImageURI(supply + 1),
            block.timestamp
        );
    }

    function createImageURI(uint256 _nftId)
        internal
        view
        returns (string memory)
    {
        string memory currentBaseURI = _baseURI();

        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(currentBaseURI, _nftId.toString(), baseURI)
                )
                : "";
    }

    // convert nftId to it's metadata location
    function createNftUri(uint256 _nftId)
        public
        view
        virtual
        returns (string memory)
    {
        require(_exists(_nftId), "ERC721Metadata : URI query non-existent");

        string memory currentBaseURI = _baseURI();

        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        _nftId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    // get all NFT's
    function getAllNft() public view returns (Sale[] memory) {
        return mintedNfts;
    }

    // get NFT by nftId.
    function getNftById(uint256 _nftId) public view returns (Sale memory) {
        return mintedNfts[_nftId - 1];
    }

    function payTo(address _to, uint256 _amount) public onlyOwner {
        // (bool succes)
    }

    function pauseMinting(bool _state) public onlyOwner {
        paused = _state;
    }

    function getBaseUri() internal view virtual returns (string memory) {
        return baseURI;
    }
}
