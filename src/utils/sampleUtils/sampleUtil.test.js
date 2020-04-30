import {add} from '.';
describe("add test",()=>
{
    it("should return sum of two numbers",()=>
    {
        expect(add(1,2)).toBe(3);
        expect(add(-2,2)).toBe(0);
    }
    )
    it("should add only two numbers",()=>{
        expect(add(2,3,4)).toBe(add(2,3));
    });
}
)