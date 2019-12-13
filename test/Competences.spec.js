import { serviceCompetences} from "../services/Competences"

test("Service get Competences",async()=>{
    const Competences = await serviceCompetences.getCompetencesFromDB();
    expect(Competences.length).toBeTruthy();
})