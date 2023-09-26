import React, { Component } from 'react'
import { Text, SafeAreaView, View, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Platform } from 'react-native'
import commomStyles from '../commomStyles';
import TodayImage from '../../assets/imgs/today.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment';
import 'moment/locale/pt_br'
import AddTask from './AddTask';

import Task from '../components/Task';

export default class TaskList extends Component {
    state = {
        showAddTask: true,
        visibleTasks: [],
        showDoneTasks: true,
        tasks: [
            {
                id: Math.random(),
                desc: 'Comprar Livro de React Native',
                estimateAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Ler Livro de React Native',
                estimateAt: new Date(),
                doneAt: null,    
            }
                ]
    }

    componentDidMount = () => {
        this.filterTasks()
    }

    toggleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({visibleTasks})
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null: new Date()
            }
        })
        this.setState({tasks: tasks}, this.filterTasks)
    }

    render() {
        
        const today = moment().locale('pt_br').format('ddd, D [de] MMMM')
        return(
            <SafeAreaView style={styles.container}>
            <AddTask 
                isVisible={this.state.showAddTask}
                onCancel={() => this.setState({showAddTask: false})}
            />
            <ImageBackground source={TodayImage}
                style={styles.background}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={this.toggleFilter}>
                        <Icon 
                            name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} 
                            size={20}
                            color={commomStyles.colors.secondary}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </View>
            </ImageBackground>
            <View style={styles.taskContainer}>
                <FlatList 
                    data={this.state.visibleTasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask}/>}
                />
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex: 3
    },

    taskContainer:{
        flex: 7
    },

    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    title : {
        fontFamily: commomStyles.fontFamily,
        fontSize: 50,
        color: commomStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 30 : 10
    }
})