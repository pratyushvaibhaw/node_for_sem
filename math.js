function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
// module.exports = add;
// module.exports = sub;

// in above case the add is getting overridden by sub so to resolve this we will put into a js object and return the same

module.exports = {
    add,sub
}
