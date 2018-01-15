export const typeDefs = `
    type Method {
        name: String!
        type: String
        id: String
        methodRef: String
    }
    
    type Deposit {
        depositRef: String!
        time: String
        date: String
        method: Method
        amount: Float
    }
    
    type Requested implements WithdrawalState {
        type: String!
        label: String
        timestmp: Int
        amount: Float
        txId: String
    }
    
    type Processing implements WithdrawalState {
        type: String!
        label: String
        timestmp: Int
        cancelUrl: String
        description: String
    }
    
    type Hold implements WithdrawalState {
        type: String!
        label: String
        timestmp: Int
        buttonLabel: String
        buttonUrl: String
        description: String
    }
    
    type Reversed implements WithdrawalState {
        type: String!
        label: String
        timestmp: Int
        description: String
    }
    
    type Left implements WithdrawalState {
        type: String!
        timestmp: Int
        label: String
        method: Method
    }
    
    interface WithdrawalState {
        type: String!
        timestmp: Int
        label: String
    }
    
    type Withdrawal {
        withdrawalRef: String!
        states: [WithdrawalState]
    }
    
    type Query {
        deposits: [Deposit]
        withdrawals: [Withdrawal]
    }
    
    schema {
        query: Query
    }
`;