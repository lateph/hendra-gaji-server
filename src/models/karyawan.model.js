// karyawan-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const karyawan = new Schema({
    nama: { type: String, required: true },
    jabatan: { type: String, required: true },
    departement: { type: String, required: true },
    status: { type: String, required: true },
    joinDate: { type: Date, required: true },
    endPeriodeContract: { type: Date }
  }, {
    timestamps: true
  });

  return mongooseClient.model('karyawan', karyawan);
};
