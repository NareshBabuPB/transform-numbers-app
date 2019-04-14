export const isOnlyNumeric = (value) => {
    const numRegex = /^[-]?[\d]+$/;
    return numRegex.test(value);
};

export const isWithinRange = (value, min, max) => 
    (min.leq(value) && max.gt(value));