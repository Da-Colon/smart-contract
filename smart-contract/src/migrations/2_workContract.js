const WorkContracts = artifacts.require("WorkContract");

module.exports = function (deployer) {
  deployer.deploy(WorkContracts);
};
