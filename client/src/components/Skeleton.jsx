// shimmer placeholders shown while project data is fetching.
// kept dumb on purpose — no props besides height variants — easier to drop in.

const Line = ({ w = '100%', h = 12, mb = 0 }) => (
  <div className="skeleton-line" style={{ width: w, height: h, marginBottom: mb }} />
);

// matches the featured project card shape (home page)
export const SkeletonFeaturedCard = ({ tall = false }) => (
  <div className="skeleton-card" style={{ minHeight: tall ? 280 : 240 }}>
    <Line w="60px" h={20} mb={20} />
    <Line w="70%" h={22} mb={12} />
    <Line w="40%" h={11} mb={18} />
    <Line mb={8} />
    <Line w="85%" mb={24} />
    <div style={{ display: 'flex', gap: 6 }}>
      <Line w="52px" h={20} />
      <Line w="68px" h={20} />
      <Line w="60px" h={20} />
    </div>
  </div>
);

// matches the projects-page card (with header strip)
export const SkeletonProjectCard = () => (
  <div className="skeleton-card" style={{ padding: 0, overflow: 'hidden' }}>
    <div className="skeleton" style={{ height: 130, borderRadius: '4px 4px 0 0' }} />
    <div style={{ padding: '22px 24px 26px' }}>
      <Line w="50px" h={18} mb={14} />
      <Line w="75%" h={20} mb={8} />
      <Line w="40%" h={11} mb={16} />
      <Line mb={6} />
      <Line w="85%" mb={18} />
      <div style={{ display: 'flex', gap: 5 }}>
        <Line w="48px" h={20} />
        <Line w="56px" h={20} />
      </div>
    </div>
  </div>
);
