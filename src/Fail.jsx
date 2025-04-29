const Fail = () => {
    const failStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
    };

    return (
        <div style={failStyle}>
            Login Failed
        </div>
    );
};

export default Fail;
