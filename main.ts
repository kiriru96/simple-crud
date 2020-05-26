const { cwd } = Deno;
import { Application, MiddlewareFunc } from "https://deno.land/x/abc/mod.ts";
import { renderFileToString } from 'https://deno.land/x/dejs/mod.ts';
import { Status } from "C:/Users/RUBEN/AppData/Local/deno/deps/https/deno.land/f97c42044a842b1399b05d131f0d2bd5b009453afcb617ce3e8f0728e1f5aafa";
//import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
//import { DATA_TYPES, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const app = new Application();

// check if user access is logged or not
const recognition : MiddlewareFunc = next => c => {
	console.log(`Request to login ${c.path}`);
	return next(c);
}
// static file
app.static('/public', "public");

//index
app.get("/", async (_c: any) =>{
	const output = await renderFileToString(`${cwd()}/template/index.ejs`, { name: "World", title: "Home" });
	return output;
}, recognition);

//profile
app.get("/profile", (c)=>{
	
	return "profile";
}, recognition);

//login
app.get("/login", (c)=>{
	return "login";
}, recognition);

app.start({port: 8080}); // listening to port 8080