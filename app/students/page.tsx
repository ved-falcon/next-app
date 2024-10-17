import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function getStudents(){
    const students = await prisma.student.findMany()
    return students
}


export default async function Students(){
    const students = await getStudents()
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {students.map(student => {
            return <li key={student.id}>{student.name}</li>
          })}
        </ul>
        </div>
    )
}