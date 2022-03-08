// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OnChainNFT is ERC721("OnChainNFT", "OCHN"), Ownable {

    struct NFT {
        uint256 id;
        string image;
        uint timestamp;
    }

    uint nftId;

    event NFTCreated(address owner, uint256 id);
    event Minted(address to, uint256 tokenId);

    //mapping(address => NFT[]) public NFTs;
    mapping(uint => NFT) public created; // created NFTs indexed by id
    mapping(uint => address) public minted; // minted NFTs indexed by id

    function createNFT(string memory _image) public {
        //NFTs[msg.sender].push(NFT(nftId, _image, block.timestamp));
        created[nftId] = NFT(nftId, _image, block.timestamp);
        nftId++;
        emit NFTCreated(msg.sender, nftId);
    }

    function mint(uint _tokenId) public{
        _safeMint(msg.sender, _tokenId);
        minted[_tokenId] = msg.sender;
        emit Minted(msg.sender, _tokenId);
    }

    function tokenURI(uint256 _tokenId) virtual override public view returns (string memory) {
        return created[_tokenId].image;
    }

    function countNFTs() public view returns (uint) {
        return nftId;
    }
}