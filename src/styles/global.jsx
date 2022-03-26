import { Global, css } from "@emotion/react";
// import reset from "./reset";

export default () => (
	<Global
		styles={css`
			@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
			body {
				font-family: 'Roboto', sans-serif;
                margin: 0;
			}
		`}
	/>
);