import RegExp from '@utils/RegExp'

test('过滤字符串中的表情符号',()=>{
    expect(RegExp.OmitEmo('sdfd👌')).toBe('sdfd')
})