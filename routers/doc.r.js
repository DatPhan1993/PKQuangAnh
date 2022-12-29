const app=require('express');
const router=app.Router();
const docC=require('../controllers/doc.c');
router.get('/xuat-hoa-don',docC.createInvoice);
router.post('/xuat-hoa-don', docC.UpdateInvoice);
router.get('/lap-phieu-hen',docC.getAppointment);
router.post('/lap-phieu-hen',docC.postAppointment);
module.exports=router;