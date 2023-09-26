import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import commomStyles from '../commomStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt_br'

export default props => {

    const doneOrNotStyle = props.doneAt != null ? {textDecorationLine: 'line-through'} : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).local('pt_br').format('dddd, D [de] MMMM')

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
                onPress={() => props.toggleTask(props.id)}
            >
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
                {/* <Text>{props.doneAt + ''}</Text> */}
            </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if(doneAt != null){
        return (
            <View style={styles.done}>
                <Icon 
                    name='check' 
                    size={20} 
                    color={'white'}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.pending}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },

    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    desc: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.mainText,
        fontSize: 15,    
        fontWeight: 'bold'    
    },
    date: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.subText
    }
})