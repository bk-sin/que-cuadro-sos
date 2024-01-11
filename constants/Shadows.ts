import Colors from './Colors'

const Shadows = {
  button: {
    primary: {
      shadowColor: Colors.primary,
      shadowOffset: {
        width: 0,
        height: 9
      },
      shadowOpacity: 0.22,
      shadowRadius: 10.24,
      elevation: 13
    },
    secondary: {

      shadowColor: Colors.secondary,
      shadowOffset: {
        width: 0,
        height: 9
      },
      shadowOpacity: 0.22,
      shadowRadius: 10.24,
      elevation: 13
    }

  },
  header: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.65,
    elevation: 9
  },
  container: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.23,
    shadowRadius: 12.81,
    elevation: 16
  }

}

export default Shadows
