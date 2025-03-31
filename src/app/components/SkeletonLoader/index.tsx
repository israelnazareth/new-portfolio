export function SkeletonLoader() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-loader__title"></div>
      <div className="skeleton-loader__projects">
        <div className="skeleton-loader__project">
          <div className="skeleton-loader__project-content">
            <div className="skeleton-loader__project-image"></div>
            <div className="skeleton-loader__project-title"></div>
            <div className="skeleton-loader__project-description"></div>
          </div>
          <div className="skeleton-loader__buttons-container">
            <div className="skeleton-loader__button"></div>
            <div className="skeleton-loader__button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
