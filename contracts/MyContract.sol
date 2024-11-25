// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

//version 2
contract MyToken is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
    
    // Variáveis específicas do contrato
    uint256 public additionalValue;

    // Função de inicialização (em vez de um construtor, devido ao uso do upgradeable proxy)
    function initialize(string memory _name, string memory _symbol, uint256 _initialSupply) public initializer {
        __ERC20_init(_name, _symbol); // Inicializa o ERC20 com o nome e símbolo do token
        __Ownable_init(msg.sender); // Inicializa o contrato como Ownable
        __UUPSUpgradeable_init(); // Initialize UUPSUpgradeable
        _mint(msg.sender, _initialSupply); // Emite tokens iniciais para o criador do contrato
    }

    // Função para definir o valor adicional
    function setAdditionalValue(uint256 _value) public onlyOwner {
        additionalValue = _value;
    }

    // Função para obter o valor adicional
    function getAdditionalValue() public view returns (uint256) {
        return additionalValue;
    }

    function getAdditionalValueX2() public view returns (uint256) {
        return additionalValue*2;
    }

    // Função para autorizar a atualização do contrato
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}