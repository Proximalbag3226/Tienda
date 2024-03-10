import React from 'react';

function PopularKeywordsComponent(props) {
  return (
    <div className="grid-container cms-component-list_space-large-responsive___xksX" style={{ overflow: 'hidden' }}>
      <section data-auto-id="keywords" className="_keywords-component_1t7ue_8">
        <div className="grid-row">
          <div className="_keywords-content_1t7ue_11">
            <div>
              <h2 className="_title_1t7ue_14">Popular ahora</h2>
            </div>
            <div>
              <div className="_keywords_1t7ue_8">
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1" href="/search?q=samba" data-tracking-link="keywordsmanual-_-samba-_-1" data-pos="site_promotion|7">{props.nombre}</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1" href="/search?q=campus" data-tracking-link="keywordsmanual-_-campus-_-2" data-pos="site_promotion|8">campus</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1" href="/search?q=forum" data-tracking-link="keywordsmanual-_-forum-_-3" data-pos="site_promotion|9">forum</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1" href="/search?q=messi" data-tracking-link="keywordsmanual-_-messi-_-4" data-pos="site_promotion|10">messi</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1" href="/search?q=gazelle" data-tracking-link="keywordsmanual-_-gazelle-_-5" data-pos="site_promotion|11">gazelle</a>
                </div>
                <div className="col--mb-s-6 col--tb-l-4 _keyword-wrapper_1t7ue_54">
                  <a className="gl-filter _keyword_5asl0_1" href="/search?q=nmd" data-tracking-link="keywordsmanual-_-nmd-_-6" data-pos="site_promotion|12">nmd</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularKeywordsComponent;
