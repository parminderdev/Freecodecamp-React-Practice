class OnlyEvens extends Component {
    // The shouldComponentUpdate method checks if the new props are even
    shouldComponentUpdate(nextProps) {
      console.log('OnlyEvens shouldComponentUpdate called');
      // Check if the next prop value is even
      if (nextProps.value % 2 === 0) {
        return true; // Re-render the component
      }
      return false; // Prevent re-render
    }
  
    render() {
      console.log('OnlyEvens render called');
      return (
        <div>
          <h1>{this.props.value}</h1>
        </div>
      );
    }
  }