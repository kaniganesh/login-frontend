const Success = () => {
    const successStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        fontSize: "2rem",
        fontWeight: "bold",
    };

    return (
        <div style={successStyle}>
            Login Successful
        </div>
    );
};

export default Success;
