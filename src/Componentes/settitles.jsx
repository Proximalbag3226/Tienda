import React from 'react';

function PopularKeywordsComponent(props) {
  return (
    <div className="grid-container cms-component-list_space-large-responsive___xksX" style={{ overflow: 'hidden' }}>
      <section data-auto-id="keywords" className="_keywords-component_1t7ue_8">
        <div className="grid-row">
          <div className="_keywords-content_1t7ue_11">
            <div>
              <h2 className="titulo_lista">Popular ahora</h2>
            </div>
            <div>
              <div className="lista">
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto1}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto2}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto3}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto4}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto5}</a>   
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto6}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto7}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto8}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto9}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto10}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto11}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1">{props.producto12}</a>
                </div>
              </div>
            </div>
            <img className = "david_laid"src={require('../images/david-laid.jpg')}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularKeywordsComponent;
