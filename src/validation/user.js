module.exports = {
    validateAddress: function(address) {
        // This is a very basic validation, real world scenario might require more complex validation
        return typeof address === 'string' && address.trim().length > 0;
    },

    validateSex: function(sex) {
        // In this case, we only allow 'Male', 'Female', or 'Other'
        const allowedValues = ['Male', 'Female', 'Other'];
        return allowedValues.includes(sex);
    },

    validatePhoneNumber: function(phoneNumber) {
        // Dutch phone numbers can start with either +31 or 0, followed by 9 digits
        const regex = /^(?:\+31|0)[1-9][0-9]{8}$/;
        return regex.test(phoneNumber);
    }
}
