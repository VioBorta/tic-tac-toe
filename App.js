import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPalyer: 1,
    }
  }

  componentDidMount = () => {
    this.initGame;
  }

  initGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPalyer: 1
    })
  }

  getTheWinner = () => {
    const numOfSquares = 3
    var sum;
    var arr = this.state.gameState;
    //check the rows

    for (var i = 0; i < numOfSquares; i++)
      sum = arr[i][0] + arr[i][1] + arr[i][2]
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1; }

    //check the col
    for (var i = 0; i < numOfSquares; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i]
      if (sum == 3) { return 1; }
      else if (sum == -3) { return -1; }
    }
    //check diagonals
    sum = arr[0][0] + arr[1][1] + arr[2][2]
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1; }

    sum = arr[2][0] + arr[1][1] + arr[0][2]
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1; }
    //there are no winners
    return 0;
  }

  onIconPress = (row, col) => {
    var value = this.state.gameState[row][col]

    if (value !== 0) {
      return;
    }
    var currentPalyer = this.state.currentPalyer;
    //set the correct icon press
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPalyer
    this.setState({ gameState: arr });

    var nextPlayer = (currentPalyer == 1 ? -1 : 1);
    this.setState({ currentPalyer: nextPlayer });

    var winner = this.getTheWinner();
    if (winner == 1) {
      alert("Player x is the winner")
    } else if (winner == -1) {
      alert("Player 0 is the winner")
    }
    this.getTheWinner();
  }

  resetGame = () => {
    this.initGame()
  }

  renderSpecificIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1: return <Icon name="close" />
      case -1: return <Icon type="material-community" name="circle-outline" />
      default: return <View />


    }

  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.onIconPress(0, 0)} style={styles.square}>
            {this.renderSpecificIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIconPress(0, 1)} style={styles.square}>
            {this.renderSpecificIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIconPress(0, 2)} style={styles.square}>
            {this.renderSpecificIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.onIconPress(1, 0)} style={styles.square}>
            {this.renderSpecificIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIconPress(1, 1)} style={styles.square}>
            {this.renderSpecificIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIconPress(1, 2)} style={styles.square}>
            {this.renderSpecificIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.onIconPress(2, 0)} style={styles.square}>
            {this.renderSpecificIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIconPress(2, 1)} style={styles.square}>
            {this.renderSpecificIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIconPress(2, 2)} style={styles.square}>
            {this.renderSpecificIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <Button title="New Game" onPress={this.resetGame} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    borderWidth: 1,
    width: 100,
    height: 100
  }
});
