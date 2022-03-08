// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OnChainNFT is ERC721("OnChainNFT", "OCHN"), Ownable {
    string SVG_HEADER = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">';
    string SVG_FOOTER = '</svg>';

    uint nftId;

    event NFTCreated(address  owner, uint tokenId);
    event Minted(address to, uint tokenId);

//    mapping(address => NFT[]) public NFTs;
    mapping(uint => bytes32) public created; // created NFTs indexed by id
    mapping(uint => address) public minted; // minted NFTs indexed by id

    function createNFT(string calldata _text1) external {
        created[nftId] = bytes32(bytes(_text1));
        emit NFTCreated(msg.sender, nftId);
        nftId++;
    }

    function mint(uint _tokenId) public{
        _safeMint(msg.sender, _tokenId);
        minted[_tokenId] = msg.sender;
        emit Minted(msg.sender, _tokenId);
    }

    function tokenURI(uint256 _tokenId) virtual override public view returns (string memory svg) {
        svg = string(abi.encodePacked(SVG_HEADER));
        svg = string(abi.encodePacked(svg,
    '<g stroke="#000"> <path d="M716.155 385.314c.305-.59 1.5 0 0 .76-1.5-.76-.305-1.35 0-.76z" stroke="none"/> <path d="M393.205 162.401c109.67-271.7 539.364 0 0 349.328-539.363-349.328-109.67-621.027 0-349.328z" fill="red"/> <path d="M596.693 191.89c10.66-12.697 20.295-25.824 28.729-37.485L282.99 345.972l-35.126 47.105L98.65 475.595c13.263-19.894 27.372-42.428 37.772-59.241l-69.399 2.822 158.14-89.924 42.013-.997 348.232-198.017-53.01 7.302c10.237-13.02 25.839-31.497 34.376-41.388l142.132-22.605L646.93 184.97l-50.236 6.92z" fill="#fff"/> <text transform="matrix(1.97453 0 0 2.07267 -381.261 -364.854)" xml:space="preserve" font-family="Noto Sans JP" font-size="40" stroke-width="0" y="350.32" x="368.751" fill="#fff">web3</text></g>'
        ));

        svg = string(abi.encodePacked(svg, '<text transform="matrix(3.08258 -.012 .0105 2.69991 -439.309 -261.715)" stroke="#000" xml:space="preserve" font-family="Noto Sans JP" font-size="21" stroke-width="0" y="180" x="201" fill="#fff">'));
        svg = string (abi.encodePacked(svg, created[_tokenId]));
        svg = string (abi.encodePacked(svg, '</text>'));
        svg = string(abi.encodePacked(svg, SVG_FOOTER));

    }

    function countNFTs() public view returns (uint) {
        return nftId;
    }
}