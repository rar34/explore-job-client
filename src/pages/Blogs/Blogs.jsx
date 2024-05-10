
const Blogs = () => {
    return (
        <div className="my-10">
            <h2 className="italic text-2xl mb-4">Q. What is an access token and refresh token? How do they work and where should we store them on the client side?</h2>
            <p>Answer. <span className="font-bold">Access Token:</span>An access token is a credential used to access protected resources on behalf of the user. It is typically a string that represents the authorization granted to the client to access specific resources. Access tokens have a limited lifespan, typically ranging from minutes to hours, after which they expire.</p>
            <p className="my-4"><span className="font-bold">Refresh Token:</span>A refresh token is a credential used to obtain a new access token when the current access token expires. Refresh tokens are long-lived compared to access tokens and are used to request new access tokens without requiring the user to log in again. Refresh tokens are securely stored and are only exchanged for a new access token when the current one expires or is revoked.</p>
            <p>Here is how they work together in a typical scenario:</p>
            <ul className="list-disc pl-6">
                <li>The client (such as a web application or mobile app) authenticates the user and obtains an access token and a refresh token from the authorization server.</li>
                <li>The client uses the access token to make requests to protected resources on the resource server.</li>
                <li>When the access token expires, the client can use the refresh token to request a new access token from the authorization server without requiring the user to log in again.</li>
                <li>The authorization server validates the refresh token and issues a new access token if the refresh token is valid.</li>
            </ul>
            <p className="my-4">As for where to store these tokens on the client side:</p>

            <p><span className="font-bold">Access Token:</span>Access tokens should be stored securely on the client side to prevent unauthorized access. They are commonly stored in memory or in secure storage mechanisms provided by the operating system or framework (such as Keychain on iOS or SharedPreferences on Android).</p>
            <p className="my-4"><span className="font-bold">Refresh Token:</span> Refresh tokens are more sensitive and should be stored securely to prevent unauthorized access. They are usually stored in more secure storage mechanisms such as encrypted databases, secure cookies, or local storage with appropriate safeguards against cross-site scripting (XSS) attacks.</p>


            <h2 className="italic text-2xl mb-4">Q. What is express js? What is Nest JS ?</h2>
            <p>Answer. <span className="font-bold">Express.js:</span>Express.js is a minimalist web framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, template engines, and more. Express.js is highly flexible and unopinionated, allowing developers to structure their applications as they see fit.Express.js is widely used in the Node.js ecosystem and is popular for its simplicity and performance. It is a great choice for developers who prefer a lightweight framework and want full control over their applications architecture.</p>
            <p className="my-4"><span className="font-bold">NestJS:</span>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js but adds more structure and features inspired by Angular, making it particularly suitable for building enterprise-grade applications.NestJS provides a modular and opinionated architecture that encourages best practices such as dependency injection, modularization, and separation of concerns. It comes with built-in support for features like GraphQL, WebSockets, microservices, and more. NestJS also leverages TypeScript, which brings static typing and other modern language features to Node.js development, enhancing developer productivity and code maintainability.NestJS is often preferred by developers who appreciate strong conventions, scalability, and maintainability in their projects. It is a good choice for building complex applications where structure and maintainability are essential.</p>
        </div>
    );
};

export default Blogs;