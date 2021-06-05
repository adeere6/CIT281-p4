
const fastify = require("fastify")()

const { data } = require("./p4-data.js")
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer } = require('./p4-module.js')



fastify.get("/cit/question", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "",
        "statusCode": 200,
        "questions": getQuestions()})
  })

  fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "",
        "statusCode": 200,
        "answers":getAnswers()})
  })

  fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "",
        "statusCode": 200,
        "questions_answers": getQuestionsAnswers()})
  })

  fastify.get("/cit/question/:number", (request, reply) => {
        reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getQuestion())
});

  fastify.get("/cit/answer/:number", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getAnswer(1))
  })

  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getQuestionAnswer(1))
  })

  fastify.get("*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>Route not found");
});


const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});