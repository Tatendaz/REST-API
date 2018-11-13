import { addNewContact,
   getContacts,
   getContactsWithID,
   updateContact, deleteContact } from '../controllers/crmController'

const routes =(app)=>{
  app.route('/contact')
  .get((req, res, next)=>{
    //middleware from body parser
    console.log(`Request from : ${req.originalUrl}`)
    console.log(`Request.log : ${req.method}`)
    next();
  }, getContacts)
//POST endpoint
  .post(addNewContact);

  app.route('/contact/:contactId')
  //get specific contact ID
  .get(getContactsWithID)
  //pur request
  .put(updateContact)

  .delete(deleteContact);
}

export default routes;
