const user = {
    id : '001',
    passward : '12345',
    toString : function() {
        // return 'id' + this.id + 'passward' + this.passward;
        return `id ${this.id} \npassward ${this.passward}`;
    }
}

// module.exports  = {
//     user : user
// }
module.exports = user;