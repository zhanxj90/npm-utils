import {
    EXP_OMIT_EMO
} from '@constant/exp'

/**
 * @
 * @param {string} value 
 * @returns 
 */
const OmitEmo = function (value){
    const rep=new RegExp(EXP_OMIT_EMO,'g')
    return value.replace(rep, '')
}

export default {
    OmitEmo
}