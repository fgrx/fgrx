import { mount } from '@vue/test-utils'
import { serviceGeneralInfos } from '@/services/GeneralInfos.js'

test("Service Get general infos",async()=>{
    const generalInfos =  await serviceGeneralInfos.getGeneralInfosFromDB();
    expect(generalInfos.title1).toBeTruthy();
})