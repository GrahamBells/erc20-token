var ERC20TokenImplementation = artifacts.require("ERC20TokenImplementation");

module.exports = function(deployer) {
    deployer.deploy(ERC20TokenImplementation);
  };
