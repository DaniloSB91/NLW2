const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir Dados
  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://github.com/diego3g.png", 
    whatsapp: "51900000000", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, //Química
    cost: "20" 
     //o proffy_id virá pelo banco de dados
  }

  classScheduleValues = [
    //class_id virá pelo banco de dados, após cadastrar a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
    ]
  
    //  await createProffy(db, { proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos 
    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
      SELECT classes.*,proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
      SELECT classes_schedule.*
      FROM classes_schedule
      WHERE classes_schedule.class_id = "1"
      AND classes_schedule.weekday = "0"
      AND classes_schedule.time_from <= "520"
      AND classes_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)


   

    // horário de trabalho do professor - das 08h as 18h
    // O time_from (08h) precisa ser antes ou igual ao horário solicitado
    // time_to precisa ser acima. 

})