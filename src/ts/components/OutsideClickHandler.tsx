import React from "react";

interface Props {
  onOutsideClick: any;
}

class OutsideClickHandler extends React.Component<Props> {
    wrapperRef: any = React.createRef();

    render() {    
      return (
        <div ref={this.wrapperRef}>
          {this.props.children}
        </div>
      )
    }  

    componentDidMount() {
      document
        .addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount(){
      document
        .removeEventListener('mousedown', this.handleClickOutside);
    }
  
    handleClickOutside = (event) => {
      if (
        this.wrapperRef.current &&
        !this.wrapperRef.current.contains(event.target)
      ) {
        this.props.onOutsideClick();
      }
    }
}

export default OutsideClickHandler;