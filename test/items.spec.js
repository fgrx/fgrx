import { serviceItems} from "../services/Items"

test("Service get Items",async()=>{
    const items = await serviceItems.getItemsFromDB();
    expect(items.length).toBeTruthy();
})