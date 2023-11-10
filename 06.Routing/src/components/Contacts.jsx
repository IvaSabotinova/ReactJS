const Contacts = () => {
    return (
        <>
            <h2>Contacts Page</h2>
            <p>Mobile: 0888 111111</p>

            <label htmlFor="title">Title</label> <br />
            <input type="text" /> <br />
            <label htmlFor="description">Description</label> <br />
            <textarea name="description" id="description" cols="30" rows="10"></textarea> <br />
            <input type="submit" />
        </>
    );
};

export default Contacts;