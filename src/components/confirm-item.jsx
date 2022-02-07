const ConfirmItem = ({ props.confirmContext.username, description, price }) => {
    return (
        <>
			<h2><u>{username}</u></h2>
            <p>{description}</p>
            <h4>Price: $<i>{price}</i></h4>
        </>
	);
};

export default ConfirmItem;