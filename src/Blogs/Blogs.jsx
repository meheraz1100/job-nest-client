const Blogs = () => {
  return (
    <div className="grid gap-10 text-white">
      <div className="collapse bg-[#407db4]" >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        What is an access token and refresh token? How do they work and where should we store them on the client side?
        </div>
        <div className="collapse-content text-xl">
          <h1 className="text-3xl font-bold">Access Token:</h1>
          <li>Think of it as a keycard granting temporary access to a specific resource.</li>
          <li>It contains limited information about the user and has a short lifespan (usually minutes to hours).</li>
          <li>This short validity helps improve security by minimizing the window for potential misuse if intercepted.</li>
          <li>The access token is used by the client application (like a mobile app) to make authorized requests to the API and access data.</li>
          <br />
          <h1 className="text-3xl font-bold">Refresh Token:</h1>
          <li>Acts like a renewal card for your access token.</li>
          <li>It is a longer-lived credential (often days or weeks) compared to the access token.</li>
          <li>When the access token expires, the client application can use the refresh token to request a new access token from the authorization server without needing the user to log in again.</li>
          <li>This creates a smooth user experience by avoiding frequent login prompts.</li>
        </div>
      </div>

      <div className="collapse bg-[#407db4]">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        What is express js? What is Nest JS?
        </div>
        <div className="collapse-content text-xl">
        <h1 className="text-3xl font-bold">Express JS:</h1>
          <li><span className="text-2xl font-bold">Lightweight web framework for Node.js:</span>
          <p>Express offers a flexible foundation for building web applications and APIs. It provides essential tools like routing, middleware, and templating, without enforcing a rigid structure.</p>
          </li>
          <li><span className="text-2xl font-bold">Unopinionated approach:</span>
          <p>Developers have a high degree of control over how they write code, allowing for customization and experimentation. This can be beneficial for smaller projects or those with specific requirements.</p>
          </li>
          <li><span className="text-2xl font-bold">Vast community and ecosystem:</span>
          <p>Express boasts a large and active community, making it easy to find resources, libraries, and support. This extensive ecosystem helps expedite development and provides solutions for common challenges.</p>
          </li>
          <div><span className="text-2xl font-bold">Suitable for:</span>
          <li>Simple web applications and APIs</li>
          <li>Prototyping and experimentation</li>
          <li>Projects where flexibility is paramount</li>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Blogs;
