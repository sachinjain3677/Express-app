import {addNewContact,
		getContactWithID,
		getContacts,
		updateContact,
		deleteContact
} from '../controllers/controller.js';

import path from 'path';

const routes = (app) => {
	app.route('/')
		.get((req, res) => {
			// console.log(`Get request received`);
			// res.sendFile(path.join(__dirname + '/../../public/welcome.html'));
			res.send(JSON.stringify({ Hello: 'World'}));
		});

	app.route('/contacts/all')

		.get(getContacts);


	app.route('/contacts/create')

		.post(addNewContact);


	app.route('/contacts/:id')

		.get(getContactWithID)

		.put(updateContact)

		.delete(deleteContact);
		
}

export default routes;