import { mount } from '@vue/test-utils'
import { servicePortfolio } from '@/services/Portfolio.js'

test("Service get portfolios",async()=>{
    const portfolios = await servicePortfolio.getPortfolioFromDB(6);
    expect(portfolios.length).toBe(6);
})