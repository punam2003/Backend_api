export const getUser = (req, res) => {
    const {userid} = req.params;
    console.log(userid);
    res.json({
        userId: userid,
        success: true
    })
}

export const signup = (req, res) => {

    const {fname, lname, email, password} = req.body;

    console.log(fname, lname, email, password);

    res.json({
       message: "Signup successfully",
       success: true
    })
}
export const getGithubDetails = async (req, res) => {
    // Function implementation
};
export const homeController = (req, res) => {
    const myResponse = {
        message: "Yes your are at home route",
        success: true,
    }
    res.json(myResponse);
}