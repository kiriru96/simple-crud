const { cwd } = Deno;
import { DATA_TYPES, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('sqlite3', {
	filepath: `${cwd()}/database.sqlite`
});

class Users extends Model {
	static table = 'users';
	
	static timestamps = true;
	
	static fields = {
		id: {
			primaryKey: true,
			autoIncrement: true
		},
		username: DATA_TYPES.STRING,
		firstName: DATA_TYPES.STRING,
		lastName: DATA_TYPES.STRING,
		pass: DATA_TYPES.STRING,
		type: DATA_TYPES.INTEGER,
	};
}