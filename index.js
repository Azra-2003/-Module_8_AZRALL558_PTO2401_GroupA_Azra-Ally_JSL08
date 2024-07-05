let bankBranchInstance = null;

class BankBranch {
    constructor(branchInfo) {
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        } 
        return bankBranchInstance;
    }

    getBranchInfo() {
        return this.branchInfo;
    }
}

// Usage
const branchA = new BankBranch({ name: "Branch A", address: "11106 Moon St" });
const branchB = new BankBranch({ name: "Branch B", address: "21 Azr St" });

console.log(branchA.getBranchInfo()); // { name: "Branch A", address: "11106 Moon St" }
console.log(branchB.getBranchInfo()); // { name: "Branch A", address: "21 Azr St" }
console.log(branchA === branchB); // true
